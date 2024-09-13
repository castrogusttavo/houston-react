import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Archive01Icon({
  iconName = 'archive-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
