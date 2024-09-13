import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MagicWand01Icon({
  iconName = 'magic-wand-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
