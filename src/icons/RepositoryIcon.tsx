import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RepositoryIcon({
  iconName = 'repository',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
