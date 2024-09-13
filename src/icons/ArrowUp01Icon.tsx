import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArrowUp01Icon({
  iconName = 'arrow-up-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
